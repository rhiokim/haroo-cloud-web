exports.document = function (req, res) {
    res.render('stat/document');
};

exports.system = function (req, res) {
    res.render('stat/system');
};

exports.documentStat = function (req, res) {
    var params = {
        documents: {
            label: ["2014-12-01", "2014-12-02", "2014-12-03", "2014-12-04", "2014-12-05", "2014-12-06", "2014-12-07", "2014-12-08", "2014-12-09", "2014-12-10", "2014-12-11", "2014-12-12", "2014-12-13", "2014-12-14", "2014-12-15", "2014-12-16", "2014-12-17", "2014-12-18", "2014-12-19", "2014-12-20", "2014-12-21", "2014-12-22", "2014-12-23", "2014-12-24", "2014-12-25", "2014-12-26", "2014-12-27", "2014-12-28"],
            value: ["31", "32", "23", "54", "15", "66", "27", "38", "09", "10", "87", "43", "43", "13", "53", "65", "23", "78", "19", "75", "21", "32", "23", "24", "25", "36", "27", "28"]
        },
        publicDocs: {
            label: ["2014-12-01", "2014-12-02", "2014-12-03", "2014-12-04", "2014-12-05", "2014-12-06", "2014-12-07", "2014-12-08", "2014-12-09", "2014-12-10", "2014-12-11", "2014-12-12", "2014-12-13", "2014-12-14", "2014-12-15", "2014-12-16", "2014-12-17", "2014-12-18", "2014-12-19", "2014-12-20", "2014-12-21", "2014-12-22", "2014-12-23", "2014-12-24", "2014-12-25", "2014-12-26", "2014-12-27", "2014-12-28"],
            value: ["54", "64", "54", "35", "45", "35", "36", "35", "63", "54", "53", "54", "54", "49", "44", "55", "45", "53", "45", "64", "34", "32", "23", "24", "25", "36", "27", "28"]
        },
        files: {
            label: ["2014-12-01", "2014-12-02", "2014-12-03", "2014-12-04", "2014-12-05", "2014-12-06", "2014-12-07", "2014-12-08", "2014-12-09", "2014-12-10", "2014-12-11", "2014-12-12", "2014-12-13", "2014-12-14", "2014-12-15", "2014-12-16", "2014-12-17", "2014-12-18", "2014-12-19", "2014-12-20", "2014-12-21", "2014-12-22", "2014-12-23", "2014-12-24", "2014-12-25", "2014-12-26", "2014-12-27", "2014-12-28"],
            value: ["31", "32", "23", "54", "15", "66", "27", "38", "09", "10", "87", "43", "43", "13", "53", "65", "23", "78", "19", "75", "21", "32", "23", "24", "25", "36", "27", "28"]
        }
    };

    res.json(params);
};

exports.systemStat = function (req, res) {
    var params = {
        power: {
            label: ["2014-12-01", "2014-12-02", "2014-12-03", "2014-12-04", "2014-12-05", "2014-12-06", "2014-12-07", "2014-12-08", "2014-12-09", "2014-12-10", "2014-12-11", "2014-12-12", "2014-12-13", "2014-12-14", "2014-12-15", "2014-12-16", "2014-12-17", "2014-12-18", "2014-12-19", "2014-12-20", "2014-12-21", "2014-12-22", "2014-12-23", "2014-12-24", "2014-12-25", "2014-12-26", "2014-12-27", "2014-12-28"],
            value: ["31", "32", "23", "54", "15", "66", "27", "38", "09", "10", "87", "43", "43", "13", "53", "65", "23", "78", "19", "75", "21", "32", "23", "24", "25", "36", "27", "28"]
        },
        traffic: {
            label: ["2014-12-01", "2014-12-02", "2014-12-03", "2014-12-04", "2014-12-05", "2014-12-06", "2014-12-07", "2014-12-08", "2014-12-09", "2014-12-10", "2014-12-11", "2014-12-12", "2014-12-13", "2014-12-14", "2014-12-15", "2014-12-16", "2014-12-17", "2014-12-18", "2014-12-19", "2014-12-20", "2014-12-21", "2014-12-22", "2014-12-23", "2014-12-24", "2014-12-25", "2014-12-26", "2014-12-27", "2014-12-28"],
            value: ["54", "64", "54", "35", "45", "35", "36", "35", "63", "54", "53", "54", "54", "49", "44", "55", "45", "53", "45", "64", "34", "32", "23", "24", "25", "36", "27", "28"]
        },
        storage: {
            label: ["2014-12-01", "2014-12-02", "2014-12-03", "2014-12-04", "2014-12-05", "2014-12-06", "2014-12-07", "2014-12-08", "2014-12-09", "2014-12-10", "2014-12-11", "2014-12-12", "2014-12-13", "2014-12-14", "2014-12-15", "2014-12-16", "2014-12-17", "2014-12-18", "2014-12-19", "2014-12-20", "2014-12-21", "2014-12-22", "2014-12-23", "2014-12-24", "2014-12-25", "2014-12-26", "2014-12-27", "2014-12-28"],
            value: ["31", "32", "23", "54", "15", "66", "27", "38", "09", "10", "87", "43", "43", "13", "53", "65", "23", "78", "19", "75", "21", "32", "23", "24", "25", "36", "27", "28"]
        }
    };

    res.json(params);
};