import { NextResponse } from "next/server";

const fallbackApkUrl =
  "https://github.com/VoiceChess/VoiceChess-Mobile/releases/download/v1.0.0-build.89/app-release.apk";

export const dynamic = "force-dynamic";

export async function GET() {
  let targetUrl = fallbackApkUrl;

  try {
    const response = await fetch(
      "https://api.github.com/repos/VoiceChess/VoiceChess-Mobile/releases/latest",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        next: { revalidate: 300 },
      },
    );

    if (response.ok) {
      const release = (await response.json()) as {
        assets?: Array<{
          name?: string;
          browser_download_url?: string;
        }>;
      };

      const apkAsset = release.assets?.find((asset) =>
        asset.name?.toLowerCase().endsWith(".apk"),
      );
      targetUrl = apkAsset?.browser_download_url ?? fallbackApkUrl;
    }
  } catch {}

  return NextResponse.redirect(targetUrl, 302);
}
