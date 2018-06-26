<template>
  <Page class="page">
    <ActionBar title="Home" class="action-bar" />
    <ScrollView>
      <StackLayout class="home-panel">
        <DrawingPad ref="dibujo" height="200"/>
        <Button text="getDrawing()" @tap="onButtonTap" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
  export default {
    methods: {
      onButtonTap() {
        this.$refs.dibujo._nativeView.getDrawing()
          .then(res => console.log(res))
          .catch(err => console.log(err));
      },
    }
  };
</script>

<style scoped>
  .hello-world {
    margin: 20;
  }

  Label {
    color: red;
  }
</style>
