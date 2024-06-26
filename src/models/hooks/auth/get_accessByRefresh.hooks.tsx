import { useMutation } from "@tanstack/react-query";

import authAPI from "@/models/api/authAPI";
import useUserStore from "@/store/store_user";

const useGetAccessByRefresh = () => {
  const { login, logout } = useUserStore();
  return useMutation({
    mutationFn: () => authAPI.refreshToken().then((res) => res.data),
    onSuccess: (data) => {
      login(
        data.accessToken,
        data.refreshToken,
        data.nickname,
        data.profileImage,
      );
    },
    onError: () => {
      login("", "", "", "");
      logout();
    },
  });
};

export default useGetAccessByRefresh;
