const router = require('express').Router();

router.get('/', async (req, res) => {
  console.log('Read All');
});

router.post('/', async (req, res) => {
  console.log('Create One');
});

router.get('/:id', async (req, res) => {
  console.log('Read One');
});

router.patch('/:id', async (req, res) => {
  console.log('Update One');
});

router.delete('/:id', async (req, res) => {
  console.log('Delete One');
});

module.exports = router;
