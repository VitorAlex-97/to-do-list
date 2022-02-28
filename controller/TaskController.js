const Tasks = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasksList = await Tasks.find();
        return res.render('index', {tasksList}); 
    } catch (err) {
        res.status(500).send({error: err.message});
    } 
};

const createTask = async (req, res) => {
    const task = req.body;

    if(!task.task) {
        return res.redirect('/');
    }

    try {
        await Tasks.create(task);
        return res.redirect('/');
    } catch(err) {
        res.status(500).send({error: err.message});
    }
};

//EXPORTANDO O MÓDULO CRIADO
module.exports = {
    getAllTasks,
    createTask
};  