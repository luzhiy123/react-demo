/* eslint-disable @typescript-eslint/no-explicit-any */
import request from "@/utils/request";

export async function loadTestData() {
  return await request("/api/test");
}
