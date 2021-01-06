const getRepos = require('./exercise-4');

test('Testa se resposta do fetch contém Project To Do List.', async () => {
  const projectsList = await getRepos('https://api.github.com/orgs/tryber/repos');
  expect(projectsList).toContain('sd-01-week4-5-project-todo-list')
});

test('Testa se resposta do fetch contém Project Meme Generator.', async () => {
  const projectsList = await getRepos('https://api.github.com/orgs/tryber/repos');
  expect(projectsList).toContain('sd-01-week4-5-project-meme-generator')
});
