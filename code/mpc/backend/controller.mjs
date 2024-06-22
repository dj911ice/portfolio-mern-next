import 'dotenv/config';
import express from 'express';
import * as courses from './model.mjs'
import {retrieveCoursesById} from "./model.mjs";
import * as credentials from "./model.mjs";
import {retrieveCredentialsById} from "./model.mjs";


const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.post('/courses', (req, res) => {
    courses.createCourse(
        req.body.courseIdentifier,
        req.body.courseName,
        req.body.courseDescription,
        req.body.courseIssuer,
        req.body.courseCompleted,
        req.body.courseDate,
        req.body.institutionalLink,
        req.body.courseVisibility
    ).then(course => {
        res.status(201).json(course);
    }).catch(error => {
        console.log(error);
        res.status(400).json({
            error: "The request to create a course is not possible at this time. Please check" +
                " thy input and try again later."
        });
    });


});

app.get('/courses', (req, res) => {
    courses.retrieveCourses()
        .then(course => {
            if (course !== null) {
                res.json(course);
            } else {
                res.status(404).json({
                    Error: 'Resource non-existent, the list of courses requested was not' +
                        ' found.'
                });
            }
        }).catch(error => {
        console.log(error);
        res.status(400).json({Error: 'Operation failed, unable to retrieve any courses.'});
    })
});

app.get('/courses/:_id', (req, res) => {
    retrieveCoursesById(req.params._id)
        .then(course => {
            if (course !== null) {
                res.json(course);
            } else {
                res.status(404).json({Error: 'Resource non-existent, the document requested is not found.'});
            }
        }).catch(error => {
        console.log(error);
        res.status(400).json({Error: 'Operation failed, unable to retrieve the course.'});
    });
});

app.put('/courses/:_id', (req, res) => {
    courses.updateCourse(
        req.params._id,
        req.body.courseIdentifier,
        req.body.courseName,
        req.body.courseDescription,
        req.body.courseIssuer,
        req.body.courseCompleted,
        req.body.courseDate,
        req.body.institutionalLink,
        req.body.courseVisibility
    ).then(course => {
        res.json(course);
    }).catch(error => {
        console.log(error);
        res.status(400).json({error: 'Unsuccessful operation, failed to update the existing course.'});
    });
});

app.delete('/courses/:_id', (req, res) => {
    courses.deleteCoursesById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({Error: 'Operation failed, the course does not exist.'});
            }
        }).catch(error => {
        console.error(error);
        res.send({error: 'Operation failed, unable to delete the course.'});
    });
});

app.post('/credentials', (req, res) => {
    credentials.createCredential(
        req.body.credentialType,
        req.body.credentialLevel,
        req.body.credentialField,
        req.body.conferralDate,
        req.body.credentialCertifier,
        req.body.credentialCompleted,
        req.body.credentialLink,
        req.body.institutionalLink,
        req.body.credentialVisibility
    ).then(credential => {
        res.status(201).json(credential);
    }).catch(error => {
        console.log(error);
        res.status(400).json({
            error: "The request to create a credential is not possible at this time. Please check" +
                " thy input and try again later."
        });
    });
});

app.get('/credentials', (req, res) => {
    credentials.retrieveCredentials()
        .then(credential => {
            if (credential !== null) {
                res.json(credential);
            } else {
                res.status(404).json({
                    Error: 'Resource non-existent, the list of credentials requested was not' +
                        ' found.'
                });
            }
        }).catch(error => {
        console.log(error);
        res.status(400).json({Error: 'Operation failed, unable to retrieve any credentials.'});
    })
});

app.get('/credentials/:_id', (req, res) => {
    retrieveCredentialsById(req.params._id)
        .then(credential => {
            if (credential !== null) {
                res.json(credential);
            } else {
                res.status(404).json({Error: 'Resource non-existent, the document requested is not found.'});
            }
        }).catch(error => {
        console.log(error);
        res.status(400).json({Error: 'Operation failed, unable to retrieve the credential.'});
    });
});

app.put('/credentials/:_id', (req, res) => {
    credentials.updateCredential(
        req.params._id,
        req.body.credentialType,
        req.body.credentialLevel,
        req.body.credentialField,
        req.body.conferralDate,
        req.body.credentialCertifier,
        req.body.credentialCompleted,
        req.body.credentialLink,
        req.body.institutionalLink,
        req.body.credentialVisibility
    ).then(credential => {
        res.json(credential);
    }).catch(error => {
        console.log(error);
        res.status(400).json({error: 'Unsuccessful operation, failed to update the existing credential.'});
    });
});

app.delete('/credentials/:_id', (req, res) => {
    credentials.deleteCredentialsById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({Error: 'Operation failed, the credential does not exist.'});
            }
        }).catch(error => {
        console.error(error);
        res.send({error: 'Operation failed, unable to delete the credential.'});
    });
});

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}...the cool port station. \nWelcome, sit back and enjoy the CRUD Life....`);
});

