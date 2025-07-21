import { NextResponse } from "next/server"

export async function GET() {
  try {
    const health = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      database: process.env.POSTGRES_URL ? "connected" : "mock_mode",
      environment: process.env.NODE_ENV || "development",
      service: "LottoLogic Pro API", // Updated code here
    }

    // Check database connection if available
    if (process.env.POSTGRES_URL) {
      try {
        const { sql } = await import("@vercel/postgres")
        await sql`SELECT 1`
        health.database = "connected"
      } catch (dbError) {
        health.database = "error"
      }
    }

    return NextResponse.json(health)
  } catch (error) {
    return NextResponse.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : "Unknown error",
        service: "LottoLogic Pro API", // Updated code here
      },
      { status: 500 },
    )
  }
}
