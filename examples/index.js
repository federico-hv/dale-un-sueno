var agentCollection, agentModel;

agentCollection = Alloy.createCollection('Agent');

agentCollection.fetch();

agentModel = Alloy.createModel('Agent', {
  id: 123
});

agentModel.fetch();
