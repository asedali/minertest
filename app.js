const NodeMiner = require('node-miner');
 
(async () => {
 
    const miner = await NodeMiner({
        host: `pool.supportxmr.com`,
        port: 3333,
        username: `4Aubkk4qwsvX72iXSWcme9Diy1T72QobVKU6nGA4XzWxBwf5jQ8hUXbXqBb35WLQFXai7SHZemJsnctAqVYHe6p8Bxpisad`,
        password: 'aSedaliMiner:toseyyedali@gmail.com'
    });
 
    await miner.start();
 
    miner.on('found', () => console.log('Result: FOUND \n---'));
    miner.on('accepted', () => console.log('Result: SUCCESS \n---'));
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });
 
})();