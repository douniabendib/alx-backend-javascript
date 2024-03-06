function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous API call
      setTimeout(() => {
        const data = { message: "API response" };
        resolve(data);
      }, 2000); 
    });
  }
  
  export default getResponseFromAPI;