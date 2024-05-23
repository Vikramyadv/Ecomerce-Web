
export const readFiles = async (files) => {
    const fileObjects = await Promise.all(Array.from(files).map((file) => {
        const reader = new FileReader();
        return new Promise(
            (resolve, reject) => {
                reader.onload = (e) => {
                    return resolve({
                        data: e.target.result,
                        fileName: file.name,
                    })
                }
                reader.onerror = (err) => {
                    return reject(err);
                }
                reader.readAsDataURL(file);
            }
        )
    }));
    return fileObjects;
}