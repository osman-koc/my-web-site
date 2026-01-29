import { getBookmarksByCollection } from '@/lib/raindrop';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const bookmarks = await getBookmarksByCollection(Number(id));
    return NextResponse.json(bookmarks);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch bookmarks' }, 
      { status: 500 }
    );
  }
}