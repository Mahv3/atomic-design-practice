import { useParams, useLocation } from "react-router-dom";
export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParameterページ</h1>
      <p>パラメータは{id}です</p>
      <p>パラメータは{query.get("name")}です</p>
    </div>
  );
};
