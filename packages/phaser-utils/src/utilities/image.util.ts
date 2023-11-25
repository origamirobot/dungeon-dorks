declare const document: any;

/**
 * Takes a base 64 image and resizes it.
 * @param data Base 64 image to resize
 * @param width The desired width to resize to.
 * @param height The desired height to resize to.
 */
export function ResizeImage(data: string, width: number, height: number): Promise<string> {
    return new Promise(async function(resolve){
        var img = document.createElement('img');
        img.onload = function()
        {        
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(this, 0, 0, width, height);
            var dataURI = canvas.toDataURL();
            resolve(dataURI);
        };
        img.src = data;
	});
}

