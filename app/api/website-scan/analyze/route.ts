import { NextRequest, NextResponse } from "next/server"

const FORESTER_BASE =
  process.env.FORESTER_API_URL || "https://forester.webgrowth.company"

export const runtime = "nodejs"
export const maxDuration = 60

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const upstream = await fetch(`${FORESTER_BASE}/api/website-scan/analyze`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    })
    const data = await upstream.json().catch(() => ({}))
    return NextResponse.json(data, { status: upstream.status })
  } catch (error) {
    console.error("[proxy website-scan/analyze]", error)
    return NextResponse.json(
      { error: "Kon website niet analyseren" },
      { status: 502 },
    )
  }
}
