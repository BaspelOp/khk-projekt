export const actions = {
    newZaznam: async ({ request }) => {
        const data = await request.formData();
        console.log(data);
    }
}