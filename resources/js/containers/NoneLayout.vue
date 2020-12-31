<template>
    <transition name="fade" mode="out-in">
        <router-view :key="$route.path"></router-view>
    </transition>
</template>

<script>
export default {
  name: 'NoneLayout'
}
</script>
