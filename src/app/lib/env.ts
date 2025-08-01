function getBasePath() {
  const ownerAndRepo = process.env.GITHUB_REPOSITORY;
  if (typeof ownerAndRepo === "string") {
    const [owner, repo] = ownerAndRepo.split("/", 2);
    if (repo !== `${owner}.github.io`) {
      return `/${repo}`;
    }
  }

  return "";
}

export const basePath = getBasePath();

export function addBasePath(path: string) {
  let prefixed = path;
  if (!prefixed.startsWith("/")) prefixed = `/${prefixed}`;
  return basePath + prefixed;
}
