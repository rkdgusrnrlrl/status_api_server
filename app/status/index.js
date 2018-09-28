const router = require('koa-router')();
const Status = require('../../models/status');
const _ = require('lodash')

router.get('/status', async (ctx) => {
    const querystring = ctx.request.querystring

    const queryParams = _.reduce(querystring.split('&'), (obj, str) => {
        const [key, val] = str.split('=')
        return _.assign(obj, {[key] : val})
    }, {})

    console.log(queryParams)

    const statusList = await Status.getList({api_id : queryParams['api_id']})
    console.log(statusList)
    ctx.body = {
        list : statusList
    };
});

module.exports = router;
