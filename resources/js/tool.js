import SanctumTokens from "./components/SanctumTokens";
import CreateTokenModal from "./components/CreateTokenModal";
import CreatedTokenModal from "./components/CreatedTokenModal";
import DeleteTokenModal from "./components/DeleteTokenModal";
import ViewTokenModal from "./components/ViewTokenModal";
import NoTokens from "./components/NoTokens";
import TokenRow from "./components/TokenRow";
import SanctumLoadingButton from "./components/SanctumLoadingButton.vue";

Nova.booting((app, _store) => {
  app.component("SanctumTokens", SanctumTokens);
  app.component("CreateTokenModal", CreateTokenModal);
  app.component("CreatedTokenModal", CreatedTokenModal);
  app.component("DeleteTokenModal", DeleteTokenModal);
  app.component("ViewTokenModal", ViewTokenModal);
  app.component("NoTokens", NoTokens);
  app.component("TokenRow", TokenRow);

  // Fix because it was deleted from laravel nova core since 3.28
  app.component("SanctumLoadingButton", SanctumLoadingButton);
});
