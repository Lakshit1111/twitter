import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useFollow = () => {
    const queryClient = useQueryClient();

    const {mutate:follow , isPending } = useMutation({
        mutationFn : async(userId) => {
            try {
                const res = fetch(`/api/users/follow/${userId}`, {
                    method : "Post"
                });
                const data = res.json();
                console.log("jdisfifn")
                if(data.error) throw new Error(data.error || "Something went wrong");
    
                return data;
    
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess : () => {
            console.log("jdisfifn")
            Promise.all([
                queryClient.invalidateQueries({queryKey : ["suggestedUsers"]}),
                queryClient.invalidateQueries({queryKey : ["authUser"]})
            ])
        }
    })
    return {follow , isPending};
}

export default useFollow;
