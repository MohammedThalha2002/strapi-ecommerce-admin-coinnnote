module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::currency.currency",
          modelName: "currency",
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: -1000,
            limit: 10,
            keys: [
              {
                name: "Name",
                weight: 100,
              },
              {
                name: "Description",
                weight: -100,
              },
            ],
          },
        },
      ],
    },
  },
});
