<template>
  <div class="basic-join">
    <div class="logo">
      <img src="/img/logo/logo_square_gray.png" alt="별별선생 로고" />
    </div>
    <div class="join-title">
      <span class="starteacher">{{ title }} </span>
      <span class="subtitle">{{ subtitle }}</span>
    </div>
    <p class="description">{{ description }}</p>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        default: ""
      },
      subtitle: {
        default: ""
      },
      description: {
        default: ""
      }
    }
  }
</script>
<style scoped>
  .basic-join {
    text-align: center;
    vertical-align: middle;
    font-weight: normal;
  }
  .basic-join .logo img {
    width: 42px;
    height: 41px;
    margin-bottom: 4px;
  }
  .basic-join .join-title {
    height: 59px;
    font-size: 40px;
  }
  .basic-join .starteacher {
    color: #3f60cc;
    font-weight: bold;
  }
  .basic-join .subtitle {
    color: #212121;
  }
  .basic-join .description {
    height: 54px;
    font-size: 20px;
    color: #666666;
    padding-top: 17px;
  }
</style>
