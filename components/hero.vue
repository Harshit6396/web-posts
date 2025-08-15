<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Your Heading Here</h1>
      <p>Your description text goes here. Make it catchy!</p>
      <button>Learn More</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.hero {

  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.hero-content {
  max-width: 600px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
}
.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}
.hero p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.hero button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
.hero button:hover {
  background-color: #0056b3;
}
</style>