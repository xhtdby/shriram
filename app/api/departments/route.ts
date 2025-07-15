import { NextResponse } from 'next/server';
import { getDepartments } from '@/app/data';

export async function GET() {
  return NextResponse.json({ data: getDepartments() });
}
