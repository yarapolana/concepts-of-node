const { isUuid } = require("uuidv4");

function validadeProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid project ID" });
  }

  next();
}

module.exports = validadeProjectId;
