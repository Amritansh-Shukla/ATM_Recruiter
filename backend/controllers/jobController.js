const Job = require('../models/Job');

const createJob = async (req, res) => {
    console.log("hello123");
    try {
        const { title, description, company, location, salary } = req.body;
        const job = new Job({
            title,
            description,
            company,
            location,
            salary,
            postedBy: req.user.userId,
        });

        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({ message: 'Server error123' });
    }
};

const getJobs = async (req, res) => {
    console.log("He")
    try {
        const jobs = await Job.find().populate('postedBy', 'name email');
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id).populate('postedBy', 'name email');
        if (!job) return res.status(404).json({ message: 'Job not found' });

        res.json(job);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const updateJob = async (req, res) => {
    try {
        const { title, description, company, location, salary } = req.body;
        const job = await Job.findById(req.params.id);

        if (!job) return res.status(404).json({ message: 'Job not found' });

        if (job.postedBy.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        job.title = title || job.title;
        job.description = description || job.description;
        job.company = company || job.company;
        job.location = location || job.location;
        job.salary = salary || job.salary;

        await job.save();
        res.json(job);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);

        if (!job) return res.status(404).json({ message: 'Job not found' });

        if (job.postedBy.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        await job.remove();
        res.json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createJob, getJobs, getJobById, updateJob, deleteJob };
