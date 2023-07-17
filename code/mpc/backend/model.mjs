import mongoose from "mongoose";
import 'dotenv/config';
import res from "express/lib/response.js";

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    {useNewUrlParser: true}
);

const coursesDB = mongoose.connection;

coursesDB.once("open", (err) => {
    if (err) {
        res.status(500).json({error: '500:Connection to the server failed.'});
    } else {
        console.log('Successfully connected to MongoDB Courses collection using Mongoose.');
    }
});

const courseSchema = mongoose.Schema({
    courseIdentifier: {type: String, required: true},
    courseName: {type: String, required: true},
    courseDescription: {type: String, required: false},
    courseIssuer: {type: String, required: true},
    courseCompleted: {type: Boolean, default: false, required: false},
    courseDate: {type: Date, default: null, required: false}
});

const Course = mongoose.model('Course', courseSchema);

const createCourse = async (courseIdentifier, courseName, courseDescription, courseIssuer, courseCompleted, courseDate) => {
    const course = new Course({
        courseIdentifier: courseIdentifier,
        courseName: courseName,
        courseDescription: courseDescription,
        courseIssuer: courseIssuer,
        courseCompleted: courseCompleted,
        courseDate: courseDate
    });
    return course.save();
};

const retrieveCourses = async () => {
    const query = Course.find();
    return query.exec();
};

const retrieveCoursesById = async (_id) => {
    const query = Course.findById({_id: _id});
    return query.exec();
};

const deleteCoursesById = async (_id) => {
    const result = await Course.deleteOne({_id: _id});
    return result.deletedCount;
};

const updateCourse = async (_id, courseIdentifier, courseName, courseDescription, courseIssuer, courseCompleted, courseDate) => {
    const result = await Course.replaceOne({_id: _id}, {
        courseIdentifier: courseIdentifier,
        courseName: courseName,
        courseDescription: courseDescription,
        courseIssuer: courseIssuer,
        courseCompleted: courseCompleted,
        courseDate: courseDate
    });
    return {
        _id: _id,
        result
    }
};

const credentialsDB = mongoose.connection;

credentialsDB.once("open", (err) => {
    if (err) {
        res.status(500).json({error: '500:Connection to the server failed.'});
    } else {
        console.log('Successfully connected to MongoDB Credentials collection using Mongoose.');
    }
});

const credentialSchema = mongoose.Schema({
    credentialType: {type: String, required: true},
    credentialLevel: {type: String, required: true},
    credentialField: {type: String, required: true},
    conferralDate: {type: Date, default: null, required: false},
    credentialCertifier: {type: String, required: true},
    credentialCompleted: {type: Boolean, default: false, required: false}
});

const Credential = mongoose.model('Credential', credentialSchema);

const createCredential = async (credentialType, credentialLevel, credentialField, conferralDate, credentialCertifier, credentialCompleted) => {
    const credential = new Credential({
        credentialType: credentialType,
        credentialLevel: credentialLevel,
        credentialField: credentialField,
        conferralDate: conferralDate,
        credentialCertifier: credentialCertifier,
        credentialCompleted: credentialCompleted
    });
    return credential.save();
};

const retrieveCredentials = async () => {
    const query = Credential.find();
    return query.exec();
};

const retrieveCredentialsById = async (_id) => {
    const query = Credential.findById({_id: _id});
    return query.exec();
};

const deleteCredentialsById = async (_id) => {
    const result = await Credential.deleteOne({_id: _id});
    return result.deletedCount;
};

const updateCredential = async (_id, credentialType, credentialLevel, credentialField, conferralDate, credentialCertifier, credentialCompleted) => {
    const result = await Credential.replaceOne({_id: _id}, {
        credentialType: credentialType,
        credentialLevel: credentialLevel,
        credentialField: credentialField,
        conferralDate: conferralDate,
        credentialCertifier: credentialCertifier,
        credentialCompleted: credentialCompleted
    });
    return {
        _id: _id,
        result
    }
};

export {
    createCourse,
    retrieveCourses,
    retrieveCoursesById,
    deleteCoursesById,
    updateCourse,
    createCredential,
    retrieveCredentials,
    retrieveCredentialsById,
    deleteCredentialsById,
    updateCredential
}
