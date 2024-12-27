import fsPromises from "fs/promises";

export const openDb = async () => {
  let dbObject = {
    projects: [],
  };

  try {
    const text = await fsPromises.readFile("./projects.json");
    return JSON.parse(text);
  } catch (err) {
    await saveData(dbObject);
    return dbObject;
  }
};

export const getProjects = async () => {
  const dbObject = await openDb();

  return dbObject.projects;
};
