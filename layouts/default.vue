<template>
    <div>
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <nuxt-page /> <!-- This renders the page content -->
      </main>
      <footer>
        <p>&copy; 2024 My App</p>
      </footer>
    </div>
  </template>
  
  <style scoped>
  header {
    background: #007bff;
    color: white;
    padding: 1rem;
  }
  footer {
    background: #f8f9fa;
    text-align: center;
    padding: 1rem;
    margin-top: auto;
  }
  </style>

