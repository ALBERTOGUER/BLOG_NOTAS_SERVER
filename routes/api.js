import { getNotes, createNote } from "../models/noteModel.js";


export default (CLI) => {

    CLI.get('/findAll', async (req,res) => {
        try {
            let data = await getNotes();
            res.status(200).send(data)
        } catch (e) {
            res.status(500).send(e)
        }
        
    })

    CLI.post('/createNote', async (req,res) => {
        try {
            let data = await createNote(req.query);
            res.status(200).send({
                status: 200
            })
        } catch (e) {
            res.status(500).send(e)
        }
    })

}