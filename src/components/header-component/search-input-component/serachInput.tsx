import { useForm } from "react-hook-form";
import { ArrowIcon } from "../../../constants/imagesImports";
import styles from "../header.module.css";
import { useAppDispatch } from "../../../store/applicationStore";
import { fetchLocationByIp } from "../../../contexts/searchContext";
function SearchInput() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty, isSubmitting, isValid },
  } = useForm({
    defaultValues: { ip: "" },
  });
  const dispatch = useAppDispatch();

  const onSubmit = (data: { ip: string }) => {
    console.log("Form submitted:", data);
    dispatch(fetchLocationByIp(data.ip));
    setValue("ip", "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles["search-form"]}>
      <input {...register("ip")} className={styles["search-input"]} />
      <button
        type="submit"
        disabled={!isDirty || !isValid || isSubmitting}
        className={styles["search-submit-button"]}
      >
        {isSubmitting ? "loading" : <img src={ArrowIcon} alt="" />}
      </button>
    </form>
  );
}

export default SearchInput;
