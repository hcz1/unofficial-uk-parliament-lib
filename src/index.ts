export * as Members from "./generated/members";
export * as Interests from "./generated/interests";

export interface MembersClientOptions {
  baseUrl?: string;
  fetch?: typeof globalThis.fetch;
}

export function createMembersClient(options: MembersClientOptions = {}) {
  const baseUrl = options.baseUrl ?? "https://members-api.parliament.uk";
  const fetchImpl = options.fetch ?? globalThis.fetch;

  if (!fetchImpl) {
    throw new Error(
      "A fetch implementation is required (Node 18+ or provide fetch)"
    );
  }

  return {
    baseUrl,
    fetch: fetchImpl,
  } as const;
}

export interface InterestsClientOptions {
  baseUrl?: string;
  fetch?: typeof globalThis.fetch;
}

export function createInterestsClient(options: InterestsClientOptions = {}) {
  const baseUrl = options.baseUrl ?? "https://interests-api.parliament.uk";
  const fetchImpl = options.fetch ?? globalThis.fetch;

  if (!fetchImpl) {
    throw new Error(
      "A fetch implementation is required (Node 18+ or provide fetch)"
    );
  }

  return {
    baseUrl,
    fetch: fetchImpl,
  } as const;
}
