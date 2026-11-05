export const getAllWorks = async () => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/fitlog",
        { cache: "no-store" }
    );

    return res.json();
};

export const getWorkDetails = async (id) => {
    const res = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`
    );

    return res.json();
};