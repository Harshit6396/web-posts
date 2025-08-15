<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div class="logo">KNOWLEDGETRANS</div>
      <ul class="nav-links">
        <li class="dropdown">
          <a href="#services">SERVICES</a>
          <ul class="dropdown-content">
            <li><a href="#translation">Translation</a></li>
            <li><a href="#interpretation">Interpretation</a></li>
            <li><a href="#transcription">Transcription</a></li>
            <li><a href="#audiovisual">Audio Visual</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#industries">INDUSTRIES</a>
        </li>
        <li class="dropdown">
          <a href="#languages">LANGUAGES</a>
        </li>
        <li class="dropdown">
          <a href="#company">COMPANY</a>
          <ul class="dropdown-content">
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Join Our Team</a></li>
          </ul>
        </li>
        <li><a href="#blog">BLOG</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  background-color: #FFF;
  padding: 20px;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar .logo {
  font-size: 1.8rem;
  color: black;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: black;
  text-decoration: none;
  font-size: 1rem;
}

.nav-links a:hover {
  text-decoration: underline;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  z-index: 1;
  list-style: none;
  padding: 10px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  color: black;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}
</style>
