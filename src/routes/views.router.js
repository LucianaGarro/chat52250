import { Router } from 'express';

const router = Router ();

router.get('/', (req, res) => {
    //antes renderizada index
    res.render('index');
})

export default router;
