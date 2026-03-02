
// Enum is a store where we can store our value it does not allow duplicate value. 
// There are 3 types of Enum: numeric, string, hetergenous

enum Status {
    STARTED, 
    IN_PROGRESS,
    COMPLETED
}

// console.log(Status)

enum status{
    STARTED = 'Starting...',
    IN_PROGRESS = 'Processing...',
    COMPLETED = 'Finished..'
}
// console.log(status)


// console.log(status['STARTED'])


enum dataSet{
    'COW_DATA'= 12,
    'THIF' = 4,
    'POLICE' = 5,
}

const dataSetValues: Record<dataSet , any> = {
    [dataSet.COW_DATA]: 12,
    [dataSet.THIF]:5,
    [dataSet.POLICE]: ['kalam', 'Rofiq', 'Saki', 'Jony','Masud']
}

console.log(dataSetValues)