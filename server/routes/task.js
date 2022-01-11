const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const tasks = await prisma.task.findMany({
    // where: { createdAt: 'desc' },
  });
  res.json(tasks);
});

router.get('/:id', async (req, res) => {
  let { id } = req.params;

  id = parseInt(id);

  const task = await prisma.task.findUnique({
    where: { id },
  });

  res.json(task);
});

router.post('/', async (req, res) => {
  const { title } = req.body;

  const task = await prisma.task.create({
    data: { title, completed: false },
  });

  res.json(task);
});

router.put('/:id', async (req, res) => {
  const { title } = req.body;
  let { id } = req.params;

  id = parseInt(id);

  const task = await prisma.task.update({
    where: { id },
    data: { title, completed: true },
  });

  res.json(task);
});

router.delete('/:id', async (req, res) => {
  let { id } = req.params;

  id = parseInt(id);

  const task = await prisma.task.delete({
    where: { id },
  });

  res.json(task);
});

module.exports = router;
