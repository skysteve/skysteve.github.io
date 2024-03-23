/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import Link from "@mui/material/Link";

export function WrappedLink(props: RouterLinkProps) {
  return <Link component={RouterLink} {...props} />;
}
