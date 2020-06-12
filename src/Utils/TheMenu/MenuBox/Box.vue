<template>
  <div class="greenBox">
    <p class="letters">
      ME
      <br />
      NU
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.greenBox {
  width: 55px;
  height: 55px;
  padding: 0.5rem;
  background: #6ad051;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3;
}

.letters {
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
}
</style>
