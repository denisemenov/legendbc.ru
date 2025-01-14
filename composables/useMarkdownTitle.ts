export const useMarkdownTitle = async (path?: string) => {
  const route = useRoute()
  const slug = path || route.params.slug
  const contentPath = Array.isArray(slug) ? `/${slug.join('/')}` : slug
  
  const { data } = await useAsyncData(`content-${contentPath}`, () => 
    queryContent(contentPath).findOne()
  )
  
  return data.value?.title || data.value?.head?.title || data.value?._dir || ''
}
