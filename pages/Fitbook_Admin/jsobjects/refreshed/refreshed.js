export default {
  autoRefresh: () => {
    setInterval(() => {
      Admin_get_gym.run();
    }, 100000000000000000000); 
  }
};
