import server from "./server.js";

const startServer = async () => {
  try {
    const PORT = 8000;
    server.listen(PORT, () => {
      console.log(
        `Express server started on port: ${PORT}`
      );
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
};

startServer();
