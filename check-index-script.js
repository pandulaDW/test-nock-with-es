const { Client } = require("@elastic/elasticsearch");

const client = new Client({ node: "http://localhost:9200" });

const index = "jokes";
const type = "chuck-norris";

const run = async () => {
    try {
        const { body } = await client.search({
            index,
            type: type,
            body: {
                query: {
                    match_all: {},
                },
            },
        });
        console.log(body.hits.hits);
    } catch (err) {
        console.log(err);
    }
};

run();
