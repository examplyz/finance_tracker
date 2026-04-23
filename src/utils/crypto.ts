export const hashPassword = async (password: string): Promise<string> => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + 'ft_salt_v1'); // соль
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

export const verifyPassword = async (hash: string , password:string): Promise<boolean> => {
    const hashedPass = await hashPassword(password)
    return hashedPass === hash
}