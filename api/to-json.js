const handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ hello: 'world' })
    }
}

exports.handler = handler;