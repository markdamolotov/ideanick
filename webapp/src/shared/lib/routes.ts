export const getRouteParameters = <T extends Record<string, boolean>>(
  object: T
) =>
  Object.fromEntries(
    Object.keys(object).map((key) => [key, `:${key}`])
  ) as Record<keyof T, string>

export const getAllIdeasRoute = () => '/'

export type ViewIdeaRouteParameters = typeof viewIdeaRouteParameters
export const viewIdeaRouteParameters = getRouteParameters({
  ideaNick: true
})
export const getViewIdeaRoute = ({ ideaNick }: ViewIdeaRouteParameters) =>
  `/ideas/${ideaNick}`
