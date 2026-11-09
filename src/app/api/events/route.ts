import { NextRequest, NextResponse } from "next/server";
import { getLiveImageKitEvents } from "@/services/imagekitEventsService";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const forceRefresh = searchParams.get("refresh") === "true";

    const { events, source } = await getLiveImageKitEvents(forceRefresh);

    return NextResponse.json(
      {
        success: true,
        source,
        totalEvents: events.length,
        totalPhotos: events.reduce((sum, e) => sum + e.photoCount, 0),
        events,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": forceRefresh
            ? "no-cache, no-store, must-revalidate"
            : "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch (error) {
    console.error("[API Events] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch events from ImageKit" },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const { events, source } = await getLiveImageKitEvents(true);
    return NextResponse.json({
      success: true,
      message: "ImageKit events cache revalidated successfully",
      source,
      totalEvents: events.length,
      totalPhotos: events.reduce((sum, e) => sum + e.photoCount, 0),
      events,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to revalidate events" },
      { status: 500 }
    );
  }
}

