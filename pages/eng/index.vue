<template>
  <section class="w-full max-w-6xl not-prose">
    <h2>Job Functions</h2>
    <div class="column space-x-12 ml-6">
      <div>Category</div>
      <div>Title</div>
      <div>PublishAt</div>
    </div>
    <ul>
      <li style="list-style: none" v-for="post in posts" :key="post._path">
        <NuxtLink
          :to="post._path"
          class="column hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div
            :class="{
              'text-white ': !post.displayCategory,
              'text-gray-900': post.displayCategory,
            }"
          >
            {{ post.category }}
          </div>
          <div class="pl-6">{{ post.title }}</div>
          <div class="pl-6">{{ post.year }}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
useHead({
  title: "Job Functions",
  meta: [{ name: "description", content: "Security Notes: Job Functions " }],
});
// const posts = await queryContent("/").only(["_path", "title"]).find();
const { data } = await useAsyncData("engineer-list", () =>
  queryContent("/eng")
    .where({ _path: { $ne: "/eng" } })
    .only(["_path", "title", "publishedAt", "category", "sequence"])
    .sort({ category: 1 })
    .find()
);

const posts = computed(() => {
  if (!data.value) {
    return [];
  }

  const result = [];
  let lastCategory = null;

  for (const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear();
    const category = post.category;

    const displayCategory = category !== lastCategory;

    // console.log(`Should display a year ${displayYear}`);

    post.displayCategory = displayCategory;
    post.categorykeep = category;
    post.year = year;
    result.push(post);
    lastCategory = category;
  }

  return result;
});
</script>

<style scoped>
.column {
  @apply flex  py-1;
}
</style>
